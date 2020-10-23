import { useEffect, useRef } from "react";

export const useDidMount = callback => {
	const didRun = useRef(false);

	useEffect(() => {
		if (!didRun.current) {
			callback();
			didRun.current = true;
		}
	});
};
