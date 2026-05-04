"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";



const roomStates = [
  { name: "Available", desc: "Ready for the next guest", count: 24, color: "bg-success" },
  { name: "Occupied", desc: "Guest currently staying", count: 12, color: "bg-danger" },
  { name: "Cleaning", desc: "Needs housekeeping", count: 5, color: "bg-warning" },
  { name: "Maintenance", desc: "Under repair, not assignable", count: 2, color: "bg-info" },
];

const mockRooms = [
  { id: "101", state: "bg-success" }, { id: "102", state: "bg-danger" },
  { id: "103", state: "bg-success" }, { id: "104", state: "bg-warning" },
  { id: "105", state: "bg-info" }, { id: "106", state: "bg-danger" },
  { id: "201", state: "bg-success" }, { id: "202", state: "bg-warning" },
  { id: "203", state: "bg-success" }, { id: "204", state: "bg-danger" },
  { id: "205", state: "bg-success" }, { id: "206", state: "bg-info" },
];

export function RoomStatus() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background-secondary rounded-[32px] p-8 md:p-16 border border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-faded border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-brand mb-4">
                Room Lifecycle
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">
                Always know what every room is doing
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mb-8 font-light leading-relaxed">
                Four clear states. Instant visibility. No verbal coordination
                needed between reception and staff.
              </p>

              <div className="space-y-3.5">
                {roomStates.map((state, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 md:p-5 bg-background-primary rounded-2xl border border-white/5"
                  >
                    <div className={cn("w-3 h-3 rounded-full shrink-0", state.color)} />
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{state.name}</div>
                      <div className="text-xs text-foreground-secondary mt-0.5">
                        {state.desc}
                      </div>
                    </div>
                    <div className={cn("font-display text-2xl font-bold", state.color.replace('bg-', 'text-'))}>
                      {state.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {mockRooms.map((room, i) => (
                  <div
                    key={i}
                    className="bg-background-primary rounded-2xl p-5 text-center border border-white/5 hover:-translate-y-1 transition-transform"
                  >
                    <div className="font-display text-lg font-bold mb-2">
                      {room.id}
                    </div>
                    <div className={cn("w-2 h-2 rounded-full mx-auto", room.state)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
