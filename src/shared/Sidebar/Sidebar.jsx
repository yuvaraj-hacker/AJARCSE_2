import React from "react";
import Calendar from "react-calendar";
import { format, parse } from 'date-fns';
import { Link } from "react-router-dom";

function Sidebar() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    const tileClassName = ({ date, view }) => {
        // Add class to current date
        if (view === 'month' && isSameDay(date, new Date())) {
            return 'current-date';
        }
    };

    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    const customLocale = {
        localize: {
          month: (n) => format(new Date(0, n), 'MM'), // Use date-fns to format month names
        },
        formatLong: {
          date: () => 'MM yyyy', // Customize the date format
        },
        parse,
      };

  return (
    <>
    <div>

    </div>
      {/* <div className="max-w-xs w-full border-l border-slate-300 pl-5 lg:block md:block hidden" >
        <h1 className="bg-primary-blue-color text-white p-2 shadow">
          Important Links
        </h1>
        <Link to="/"  onClick={scrollToTop}>
          <h1
          
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Home
          </h1>
        </Link>
        <Link to="/aim-nd-scope" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Aim & Scope
          </h1>
        </Link>
        <Link to="/aboutus" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            About Us
          </h1>
        </Link>
        <Link to="/editorial-board" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Editorial Board
          </h1>
        </Link>
        {/* <Link to="/call-for-papers" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Call For Paper
          </h1>
        </Link> 

      <h1 className="p-2 pl-0 border-b  border-slate-300 text-sm font-semibold"> <a href="https://AJARCSE.com/tmp/index.php/Overview/login">Submit New Manuscript</a></h1>  
        <Link to="/issues" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Issues
          </h1>
        </Link>
        <Link to="/author-guidelines" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Author Guidelines
          </h1>
        </Link>
      <Link to="/pay-fees" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Pay fees
          </h1>
        </Link> 

        <Link to="/copyrights-form" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Copyright Form
          </h1>
        </Link>
        
        <Link to="/contactus" onClick={scrollToTop}>
          <h1
            role="button"
            className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"
          >
            Contact Us
          </h1>
        </Link>

        <Calendar className="sidebar-calendar" tileClassName={tileClassName}  locale={customLocale} />
      </div> */}
    </>
  );
}

export default Sidebar;
