//并发请求控制
export class ConcurrentRequest {
	parallelCount: number;
	runningCount: number;
	tasks: any[];

	constructor(parallelCount = 2) {
		this.parallelCount = parallelCount;
		this.runningCount = 0;
		this.tasks = [];
	}

	add(task: any) {
		return new Promise((resolve, reject) => {
			this.tasks.push({ task, resolve, reject });
			this._run();
		});
	}

	_run() {
		//依次执行队列里的所有任务，当然要满足我们的需求，当前任务的数量要小于并发数量
		while (this.runningCount < this.parallelCount && this.tasks.length) {
			//拿到任务队列中的第一个任务，并把原任务队列中的第一个任务删除。
			const { task, resolve, reject } = this.tasks.shift();
			//当前运行任务增加进行记录
			this.runningCount++;
			//对异步任务进行调用
			task()
				.then(resolve, reject)
				.finally(() => {
					//每运行完一个任务，减少当前运行任务，重新启动_run函数运行下一个任务
					this.runningCount--;
					this._run();
				});
		}
	}
}
