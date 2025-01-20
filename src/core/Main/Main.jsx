import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'

export default function Main() {

    return (
        <>
            <div className="h-screen">
                <Header />
                <main className=" lg:mt-[120px] md:mt-[100px]  mt-[110px]     ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}