import { useLocation } from 'react-router-dom';

const usePathName = () => {
    const pathName = useLocation().pathname;

    return pathName;
};

export default usePathName;