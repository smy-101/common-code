//在首次渲染时不进行effect
import React, { useEffect, useRef } from "react";

interface Props {
	effect: React.EffectCallback;
	deps: React.DependencyList;
}

export const useUpdateEffect = (props: Props) => {
	const { effect, deps } = props;

	const isFirst = useRef(true);

	useEffect(() => {
		if (isFirst.current) {
			isFirst.current = false;
			return;
		}

		effect();
	}, [deps]);
};
