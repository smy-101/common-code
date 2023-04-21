//由于JavaScript的精度问题,直接进行计算会存在问题  需要进行一定的处理


//在知道小数位个数的前提下，可以考虑通过将浮点数放大倍数到整型(最后再除以相应倍数)，再进行运算操作，这样就能得到正确的结果了
const formatFloat = (f: number, digit: number) => {
  const m = Math.pow(10, digit);
  return Math.round(f * m) / m;
};

const handleData = (data:number | string) => {
  return data ? Number(data) : 0;
}

//导出为class,使用时更加简单
export class Calculate{
  static add(a:number | string,b:number | string,digit?:number){
    return formatFloat(handleData(a) + handleData(b),digit ?? 2)
  }

  static minus(a:number | string,b:number | string,digit?:number){
    return formatFloat(handleData(a) - handleData(b),digit ?? 2)
  }

  static multiply(a:number | string,b:number | string,digit?:number){
    return formatFloat(handleData(a) * handleData(b),digit ?? 2)
  }

  static divide(a:number | string,b:number | string,digit?:number){
    if (handleData(b) === 0){
      throw new Error('除数不能为0')
    }else {
      return formatFloat(handleData(a) / handleData(b),digit ?? 2)
    }
  }
}


//todo 大数相加不能使用上述方法  需要将数字先转化为字符串之后逐个字符相加得出结果
