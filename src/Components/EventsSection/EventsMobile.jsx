import { Button } from "@/shadcn/ui/button.jsx";
import { Link } from "react-router-dom";
import leftBracket from "@/assets/EventsSectionAssets/leftBracket.svg";
import rightBracket from "@/assets/EventsSectionAssets/rightBracket.svg";
import wheel from "@/assets/EventsSectionAssets/wheel.svg";
import gdgBadge from "@/assets/EventsSectionAssets/gdgBadge.svg";

const events = [
    {
        title: "Cloud Community Day",
        date: "14 Jun 2025",
        accent: "bg-yellow-400",
    },
    {
        title: "DevFest 2025",
        date: "12 Oct 2025",
        accent: "bg-blue-500",
    },
    {
        title: "Build With AI",
        date: "13 Feb 2025",
        accent: "bg-red-500",
    },
];

function EventsMobile() {
    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto flex w-full max-w-md flex-col items-center gap-8 px-5">
                <div className="flex w-full items-center justify-between">
                    <img
                        src={wheel}
                        alt="Decorative wheel"
                        className="h-16 w-16 wheel-rotate"
                    />
                    <div className="flex items-center justify-center gap-3">
                        <img
                            src={leftBracket}
                            alt="Left bracket"
                            className="h-16"
                        />
                        <h2 className="text-3xl font-extrabold text-black">
                            Events
                        </h2>
                        <img
                            src={rightBracket}
                            alt="Right bracket"
                            className="h-16"
                        />
                    </div>
                    <img
                        src={wheel}
                        alt="Decorative wheel"
                        className="h-16 w-16 wheel-rotate"
                    />
                </div>

                <div className="grid w-full gap-5">
                    {events.map((event) => (
                        <article
                            key={event.title}
                            className="relative rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#111]"
                        >
                            <div
                                className={`h-3 w-full rounded-t-2xl ${event.accent}`}
                            />
                            <div className="relative px-4 pb-4 pt-4">
                                <div className="flex h-32 items-center justify-center rounded-xl border-2 border-black bg-slate-100 text-xs font-semibold text-slate-600">
                                    Event Poster Placeholder
                                </div>
                                <div className="mt-3 space-y-1">
                                    <h3 className="text-base font-bold text-black">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-600">
                                        {event.date}
                                    </p>
                                </div>
                                <img
                                    src={gdgBadge}
                                    alt="GDG badge"
                                    className="absolute bottom-1 right-3 h-16 w-16 rounded-md"
                                />
                            </div>
                        </article>
                    ))}
                </div>

                <Button
                    asChild
                    className="w-full rounded-full bg-linear-to-r from-emerald-300 to-green-400 px-6 py-5 text-base font-semibold text-black shadow-[3px_3px_0_0_#111] hover:from-emerald-400 hover:to-green-500"
                >
                    <Link to="/allEvents">🎉 View All Events</Link>
                </Button>
            </div>
        </section>
    );
}

export default EventsMobile;
