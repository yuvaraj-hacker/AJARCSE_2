import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'

export default function Main() {

    return (
        <>
            <div className="h-screen">
                <Header />
                <main className=" lg:mt-[90px] md:mt-[70px]  mt-[75px]     ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}