import {Header, Footer} from '@components/index'
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
      <div className=' h-[93vh] w-[96vw]  border border-black bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter sm:backdrop-blur-none md:backdrop-blur-sm bg-opacity-10 '>
        <Header/>
            
            <main>
                
                {children}

            </main>

        {/* <Footer/> */}
        </div>
    </>
  );
};

export default Layout;