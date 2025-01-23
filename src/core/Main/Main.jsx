import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'

export default function Main() {

    return (
        <>
            <div className="h-screen">
                <Header />
                <main className=" lg:mt-[55px] md:mt-[60px]  mt-[75px]     ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}