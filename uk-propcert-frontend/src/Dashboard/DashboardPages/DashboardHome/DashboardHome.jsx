import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import { Home, Briefcase } from "lucide-react";

const DashboardHome = () => {

    // Total Propetrty Card Chart
    const options = {
        chart: {
          type: "bar",
          height: 100,
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            borderRadius: 6,
          },
        },
        xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          labels: {
            style: {
              colors: "#000",
              fontSize: "12px",
            },
          },
        },
        yaxis: { show: false },
        grid: { show: false },
        dataLabels: { enabled: false },
        fill: { colors: ["#8B5CF6"] },
      };
    
      const series = [
        {
          name: "Agents",
          data: [10, 20, 40, 20, 30, 20, 40],
        },
      ];

    //  Sales Analytic
    const options1 = {
        chart: { type: "area", toolbar: { show: false } },
        colors: ["#6366F1", "#10B981"],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2 },
        fill: { type: "gradient", gradient: { shadeIntensity: 0.3, opacityFrom: 0.4, opacityTo: 0.1 } },
        grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
        yaxis: { labels: { formatter: (val) => `${val}K` } },
      };
    
      const series1 = [
        { name: "Earnings", data: [16, 17, 15, 21, 18, 16, 19, 17, 18, 20, 19, 21] },
        { name: "Expenses", data: [16, 15, 17, 18, 16, 15, 18, 16, 17, 19, 16, 18] },
      ];


    //   Transition Card Table

    const transactions = [
    {
      id: "#201",
      name: "Michael A. Miner",
      invoice: "IN-4563",
      date: "Dec 22, 2024",
      amount: "$45,842",
      method: "Mastercard",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "#202",
      name: "Theresa T. Brose",
      invoice: "IN-4563",
      date: "Sep 13, 2024",
      amount: "$78,483",
      method: "Visa",
      status: "Cancel",
      statusColor: "bg-red-100 text-red-700",
    },
    {
      id: "#203",
      name: "James L. Erickson",
      invoice: "IN-4563",
      date: "Nov 18, 2023",
      amount: "$83,644",
      method: "Paypal",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "#204",
      name: "Lily W. Wilson",
      invoice: "IN-4563",
      date: "Aug 24, 2024",
      amount: "$94,305",
      method: "Mastercard",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "#205",
      name: "Sarah M. Brooks",
      invoice: "IN-4563",
      date: "Oct 13, 2024",
      amount: "$42,561",
      method: "Visa",
      status: "Cancel",
      statusColor: "bg-red-100 text-red-700",
    },
    {
      id: "#206",
      name: "Joe K. Hall",
      invoice: "IN-4563",
      date: "Jan 20, 2023",
      amount: "$25,571",
      method: "Paypal",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
    },
  ];
    
    return (    
        <div className='px-8 pt-28 w-[100%] '>
            {/* Card Of Toatal Agent, Property etc ........ */}
            <div className='flex gap-5 justify-between  items-center'>
                <div className='flex-1 flex justify-between px-4 py-3  w-[17.6rem] bg-[#ececec] dark:bg-gray-800 rounded-lg shadow-md '>
                    <div className='mt-5'>
                        <div class="w-14 rounded-sm h-14 bg-slate-300  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">  
                            <path stroke-linecap="round" stroke-linejoin="round" d="M22 22H2" />
                            <path stroke-linecap="round" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16" />
                            <path fill="currentColor" d="M20.25 11.5a.75.75 0 001.5 0zM20.111 8.337l-.416.624zm.552.552l-.624.417zM21.75 15.5a.75.75 0 00-1.5 0zM17.5 8.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-6.5zM3.889 8.337l.417.624zm-.552.552l.624.417zM3.75 20a.75.75 0 00-1.5 0zm-1.5-4a.75.75 0 001.5 0zM6.5 7.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 11.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 00-.759.76l1.248.833a1.3 1.3 0 01.345-.345zM2.25 20v2h1.5v-2zm0-8.5V16h1.5v-4.5z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3M10 5h4m-4 9h.5m3.5 0h-1.5M14 8h-.5M10 8h1.5M10 11h4" />
                            </svg>
                        </div>
                        <h2 className='mt-4'>No. of Properties</h2>
                        <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-bold mt-2'>2,854</h2>
                        <p className='bg-[#def3e6] px-1 mt-2 rounded-md flex items-center gap-2'><FontAwesomeIcon icon={faArrowUp} className='text-sm' /> 7.35%</p>
                        </div>
                    </div>
                    <div className='px-1 py-1'>
                        <div className="w-[130px] mx-auto py-0 rounded-lg ">
                            <Chart options={options} series={series} type="bar" height={135} />
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex justify-between px-4 py-3  w-[17.6rem] bg-[#ececec] dark:bg-gray-800 rounded-lg shadow-md '>
                    <div className='mt-5'>
                        <div class="w-14 rounded-sm h-14 bg-slate-300  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--solar text-primary" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="6" r="4"></circle><path stroke-linecap="round" d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4m11.197 11c.51.588.803 1.271.803 2c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4q.511 0 1 .055M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"></path></g></svg>
                        </div>
                        <h2 className='mt-4'>Regi. Agents</h2>
                        <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-bold mt-2'>705</h2>
                        <p className='bg-[#def3e6] px-1 mt-2 rounded-md flex items-center gap-2'><FontAwesomeIcon icon={faArrowUp} className='text-sm' /> 76.89%</p>
                        </div>
                    </div>
                    <div className='px-1 py-1'>
                        <div className="w-[130px] mx-auto py-0 rounded-lg ">
                            <Chart options={options} series={series} type="bar" height={135} />
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex justify-between px-4 py-3  w-[17.6rem] bg-[#ececec] dark:bg-gray-800 rounded-lg shadow-md '>
                    <div className='mt-5'>
                        <div class="w-14 rounded-sm h-14 bg-slate-300  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--solar text-primary" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="9" r="2"></circle><path d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></path><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></path></g></svg>
                        </div>
                        <h2 className='mt-4'>Customers</h2>
                        <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-bold mt-2'>9,431</h2>
                        <p className='bg-[#def3e6] px-1 mt-2 rounded-md flex items-center gap-2'><FontAwesomeIcon icon={faArrowDown} className='text-sm' /> 45%</p>
                        </div>
                    </div>
                    <div className='px-1 py-1'>
                        <div className="w-[130px] mx-auto py-0 rounded-lg ">
                            <Chart options={options} series={series} type="bar" height={135} />
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex justify-between px-4 py-3  w-[17.6rem] bg-[#ececec] dark:bg-gray-800 rounded-lg shadow-md '>
                    <div className='mt-5'>
                        <div class="w-14 rounded-sm h-14 bg-slate-300  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--solar text-primary" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M3.172 20.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14c0-1.17 0-2.158-.035-3m-1.137-3.828C19.657 6 17.771 6 14 6h-4C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14c0 1.17 0 2.158.035 3M12 2c1.886 0 2.828 0 3.414.586S16 4.114 16 6M8.586 2.586C8 3.172 8 4.114 8 6"></path><path d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></path></g></svg>
                        </div>
                        <h2 className='mt-4'>Revenue</h2>
                        <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-bold mt-2'>$78.3M</h2>
                        <p className='bg-[#def3e6] px-1 mt-2 rounded-md flex items-center gap-2'><FontAwesomeIcon icon={faArrowUp} className='text-sm' /> 8.76%</p>
                        </div>
                    </div>
                    <div className='px-1 py-1'>
                        <div className="w-[130px] mx-auto py-0 rounded-lg ">
                            <Chart options={options} series={series} type="bar" height={135} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Analytic */}
            <div className='flex gap-8 mt-8 mb-5'>
                <div>
                    <div className="bg-[#ececec] dark:bg-gray-800 p-6 w-[58rem] h-40rem] rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Sales Analytic</h2>
                            <button className="text-sm bg-gray-100 px-3 py-1.5 rounded-md dark:bg-gray-700">This Month</button>
                        </div>
                        <div>
                            <h2 className=''> <FontAwesomeIcon icon={faMoneyBill} /> Earnings : $85,934</h2>
                        </div>
                        <div className="mb-4">
                            <Chart options={options1} series={series1} type="area" height={450} />
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                            <p className="text-gray-500 text-sm">Income</p>
                            <p className="text-lg font-semibold">23,675.00</p>
                            <span className="text-green-500 text-xs">▲ 0.08%</span>
                            </div>
                            <div>
                            <p className="text-gray-500 text-sm">Expenses</p>
                            <p className="text-lg font-semibold">11,562.00</p>
                            <span className="text-red-500 text-xs">▼ 5.38%</span>
                            </div>
                            <div>
                            <p className="text-gray-500 text-sm">Balance</p>
                            <p className="text-lg font-semibold">67,365.00</p>
                            <span className="text-green-500 text-xs">▲ 2.89%</span>
                            </div>
                        </div>
                        </div>
                </div>
                <div>
                    <div className="max-w-sm flex w-full bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl text-white shadow-lg">
                        <div className='gap-5'>
                            <h2 className="text-3xl font-bold">$117,000.43</h2>
                            <p className="text-sm opacity-80">My Balance</p>
                            
                            <div className="mt-4 items-center">
                                <div className="flex items-center mb-2 gap-2 p-2 rounded-lg">
                                <div className="bg-blue-500 p-2 ">
                                    <FontAwesomeIcon icon={faArrowDown} className='text-xl' />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">$13,321.12</p>
                                    <p className="text-xs opacity-80">Income</p>
                                </div>
                                </div>
                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                <div className="bg-red-500 p-2 ">
                                    <FontAwesomeIcon icon={faArrowUp} className='text-xl' />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">$7,566.11</p>
                                    <p className="text-xs opacity-80">Expense</p>
                                </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex gap-4">
                                <button className="flex-1 bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-lg">Send</button>
                                <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg">Receive</button>
                            </div>
                            </div>
                            <div className='mt-14 ml-2'>
                                <img className='w-[200px]' src="https://i.ibb.co.com/WNSvRt7G/money-Cn-A61d-Pw.png" alt="" />
                            </div>
                            
                        </div>

                        <div>
                            <div className="bg-white p-6 mt-5 rounded-2xl shadow-md w-full max-w-lg mx-auto">
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Property Card */}
                                    <div className="flex flex-col items-center space-y-2">
                                    <div className="bg-purple-100 p-3 rounded-xl">
                                        <Home className="text-purple-500 w-8 h-8" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-700">Property</h2>
                                    <p className="text-2xl font-bold">15,780</p>
                                    <p className="text-sm text-gray-500">60% Target</p>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-purple-500 rounded-full w-[60%]"></div>
                                    </div>
                                    </div>

                                    {/* Revenue Card */}
                                    <div className="flex flex-col items-center space-y-2">
                                    <div className="bg-green-100 p-3 rounded-xl">
                                        <Briefcase className="text-green-500 w-8 h-8" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
                                    <p className="text-2xl font-bold">$78.3M</p>
                                    <p className="text-sm text-gray-500">80% Target</p>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full w-[80%]"></div>
                                    </div>
                                    </div>
                                </div>

                                {/* View More Button */}
                                <div className="mt-4 text-center">
                                    <a href="#" className="text-blue-500 font-semibold flex items-center justify-center gap-1">
                                    View More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card And Map */}


                {/* Card And Map */}

                {/* Last Transition  */}

                <div className="p-6 bg-white rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Latest Transactions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Purchase ID</th>
                            <th className="py-3 px-6 text-left">Buyer Name</th>
                            <th className="py-3 px-6 text-left">Invoice</th>
                            <th className="py-3 px-6 text-left">Purchase Date</th>
                            <th className="py-3 px-6 text-left">Total Amount</th>
                            <th className="py-3 px-6 text-left">Payment Method</th>
                            <th className="py-3 px-6 text-left">Payment Status</th>
                            <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {transactions.map((tx) => (
                            <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-6">{tx.id}</td>
                                <td className="py-3 px-6">{tx.name}</td>
                                <td className="py-3 px-6">{tx.invoice}</td>
                                <td className="py-3 px-6">{tx.date}</td>
                                <td className="py-3 px-6">{tx.amount}</td>
                                <td className="py-3 px-6">{tx.method}</td>
                                <td className="py-3 px-6">
                                <span className={`px-3 py-1 text-xs rounded-full ${tx.statusColor}`}>
                                    {tx.status}
                                </span>
                                </td>
                                <td className="py-3 px-6 flex justify-center space-x-2">
                                <button className="text-gray-500 hover:text-gray-700">
                                    👁️
                                </button>
                                <button className="text-purple-500 hover:text-purple-700">
                                    ✏️
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    🗑️
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>

                {/* Last Transition  */}

                
        </div>
    );
};

export default DashboardHome;