import { useRouter as useNextRouter } from 'next/navigation';
import { useNavigate as useReactNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export function useUniversalNavigate() {
    let NextRouter;
    try {
        NextRouter = useNextRouter();
    } catch (e) {
        NextRouter = null;
    }
    const reactNavigate = useReactNavigate();

    const navigate = useMemo(() => {
        return (path) => {
            if (NextRouter) {
                NextRouter.push(path);
            } else {
                reactNavigate(path);
            }
        };
    }, [NextRouter, reactNavigate]);

    return navigate;
}
