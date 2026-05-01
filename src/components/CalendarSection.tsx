
import { motion } from 'framer-motion';

const events = [
  { sno: 1,  description: 'Div T COT 1 - In person',             date: '26 Jul 2026', remark: 'NLB / Community Clubs' },
  { sno: 2,  description: 'Mega Event',                           date: '30 Aug 2026', remark: 'Div T - Membership Drive / National Day' },
  { sno: 3,  description: 'All Area Contest (Tamil)',             date: '11 Oct 2026', remark: 'HS and EV' },
  { sno: 4,  description: 'Div T Tamil Contest',                  date: '25 Oct 2026', remark: 'HS and EV' },
  { sno: 5,  description: 'Div T COT 2 - Online',                 date: '13 Dec 2026', remark: '—' },
  { sno: 6,  description: 'Div T Special Meeting with Counsel',   date: '10 Jan 2027', remark: 'Discussion on Successor(s) of Div T' },
  { sno: 7,  description: 'All Area Contest (English)',           date: '14 Feb 2027', remark: '—' },
  { sno: 8,  description: 'Div T English Contest',                date: '21 Feb 2027', remark: 'SINDA / CSC' },
  { sno: 9,  description: 'All Area Contest (Tamil)',             date: '21 Mar 2027', remark: 'IS and TT' },
  { sno: 10, description: 'Div T Tamil Contest',                  date: '18 Apr 2027', remark: 'IS and TT (Membership Drive)' },
  { sno: 11, description: 'Div T Family Day',                     date: '9 May 2027',  remark: '@ Sentosa' },
  { sno: 12, description: 'Div T Achievers Day',                  date: '13 Jun 2027', remark: 'CSC' },
  { sno: 13, description: 'Div T DCM and Dist TRIOs',             date: 'Quarterly',   remark: 'Exact date to be confirmed with TRIOs' },
  { sno: 14, description: 'Monthly Div Council Meeting',          date: 'Monthly',     remark: 'To be decided with Area Directors' },
];

const isRecurring = (date: string) => date === 'Quarterly' || date === 'Monthly';

export default function CalendarSection() {
  return (
    <section className="py-12 md:py-24 bg-surface-variant/30 relative z-10" id="calendar">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-h2 text-2xl md:text-4xl text-brand-blue mb-4 font-bold">
            Proposed Div-T 2026–2027 Calendar
          </h2>
          <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl mx-auto">
            Key events and milestones planned for Division T across the term
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl shadow-xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="hidden md:block py-4 px-5 font-semibold text-sm uppercase tracking-wide w-12">#</th>
                <th className="py-4 px-5 font-semibold text-sm uppercase tracking-wide">Event</th>
                <th className="py-4 px-5 font-semibold text-sm uppercase tracking-wide whitespace-nowrap">Date</th>
                <th className="py-4 px-5 font-semibold text-sm uppercase tracking-wide">Remark / Venue</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, i) => (
                <motion.tr
                  key={event.sno}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`border-b border-outline/10 transition-colors duration-200 hover:bg-brand-blue/5 ${
                    i % 2 === 0 ? 'bg-surface' : 'bg-surface-variant/20'
                  }`}
                >
                  <td className="hidden md:block py-4 px-5 text-on-surface-variant text-sm font-medium">{event.sno}</td>
                  <td className="py-4 px-4 text-on-surface font-medium">{event.description}</td>
                  <td className="py-4 px-2 md:px-5 whitespace-nowrap">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      isRecurring(event.date)
                        ? 'bg-brand-maroon/10 text-brand-maroon'
                        : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      {event.date}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-on-surface-variant text-sm">{event.remark}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
