import {Header, Footer} from '@components/index'
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
        <Header/>
            
            <main>
                
                {children}

            </main>

        <Footer/>
      
    </>
  );
};

export default Layout;