import React from "react";
import { Clock, Coffee, Code, Presentation, Trophy } from "lucide-react";

// const Schedule = () => {
//   const schedule = [
//     {
//       time: "08:30 AM",
//       activity: "Registration & Onboarding",
//       icon: Clock,
//       color: "text-blue-500",
//     },
//     {
//       time: "09:00 AM",
//       activity: "Inauguration & Briefing",
//       icon: Presentation,
//       color: "text-purple-500",
//     },
//     {
//       time: "10:00 AM",
//       activity: "Hacking Begins",
//       icon: Code,
//       color: "text-green-500",
//     },
//     {
//       time: "11:00 AM",
//       activity: "Mentoring Rounds",
//       icon: Clock,
//       color: "text-orange-500",
//     },
//     {
//       time: "01:00 PM",
//       activity: "Lunch Break",
//       icon: Coffee,
//       color: "text-slate-500",
//     },
//     {
//       time: "01:45 PM",
//       activity: "Hacking Resumes",
//       icon: Code,
//       color: "text-green-500",
//     },
//     {
//       time: "03:30 PM",
//       activity: "Project Submission Deadline",
//       icon: Clock,
//       color: "text-red-500",
//     },
//     {
//       time: "04:00 PM",
//       activity: "Final Pitches & Demo",
//       icon: Presentation,
//       color: "text-indigo-500",
//     },
//     {
//       time: "06:30 PM",
//       activity: "Jury Deliberation",
//       icon: Clock,
//       color: "text-slate-500",
//     },
//     {
//       time: "07:00 PM",
//       activity: "Awards & Closing Ceremony",
//       icon: Trophy,
//       color: "text-yellow-500",
//     },
//   ];

//   return (
//     <section
//       id="schedule"
//       className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Event <span className="text-blue-600">Schedule</span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             A carefully crafted timeline for maximum productivity and learning.
//             Every moment is designed to fuel your innovation journey.
//           </p>
//           <div className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full">
//             <Clock className="w-5 h-5" />
//             <span className="font-medium">1st July 2025</span>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white p-6">
//               <h3 className="text-2xl font-bold text-center">
//                 Hackathon Day Timeline
//               </h3>
//             </div>

//             <div className="divide-y divide-slate-100">
//               {schedule.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center p-6 hover:bg-slate-50 transition-colors duration-200"
//                 >
//                   <div className="flex-shrink-0 w-20 md:w-24">
//                     <span className="text-lg font-semibold text-slate-900">
//                       {item.time}
//                     </span>
//                   </div>
//                   <div className="flex-shrink-0 mx-4 md:mx-6">
//                     <div
//                       className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center ${item.color}`}
//                     >
//                       <item.icon className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-lg font-semibold text-slate-900 mb-1">
//                       {item.activity}
//                     </h4>
//                     {item.activity === "Lunch Break" && (
//                       <p className="text-sm text-slate-600">
//                         Nutritious meals provided for all participants
//                       </p>
//                     )}
//                     {item.activity === "Mentoring Rounds" && (
//                       <p className="text-sm text-slate-600">
//                         Expert guidance from industry professionals
//                       </p>
//                     )}
//                     {item.activity === "Final Pitches & Demo" && (
//                       <p className="text-sm text-slate-600">
//                         5-minute presentations to industry jury
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 grid md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Code className="w-6 h-6 text-green-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-slate-900 mb-2">
//                 5.5 Hours
//               </h4>
//               <p className="text-slate-600">Intensive Development Time</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Presentation className="w-6 h-6 text-blue-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-slate-900 mb-2">
//                 2.5 Hours
//               </h4>
//               <p className="text-slate-600">Pitching & Evaluation</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Trophy className="w-6 h-6 text-orange-600" />
//               </div>
//               <h4 className="text-lg font-semibold text-slate-900 mb-2">
//                 1 Hour
//               </h4>
//               <p className="text-slate-600">Awards & Recognition</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Schedule;
