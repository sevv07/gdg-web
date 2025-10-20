import { useState } from "react";
import { MapPin, Presentation } from "lucide-react";

const events = {
    day1: [
        {
            time: "09:30 - 10:00",
            title: "Registration and Welcome",
            speaker: "Organization Team",
            location: "Entrance Hall",
        },
        {
            time: "10:00 - 11:00",
            title: "Opening Speech",
            speaker: "Ahmet Yılmaz",
            location: "Main Hall",
        },
        {
            time: "11:15 - 12:00",
            title: "Artificial Intelligence and the Future",
            speaker: "Ayşe Demir",
            location: "Hall A",
        },
        {
            time: "13:00 - 14:00",
            title: "Networking & Lunch",
            speaker: "Tüm Katılımcılar",
            location: "Fuaye Alanı",
        },
        {
            time: "14:15 - 15:00",
            title: "cloud technologies",
            speaker: "Mehmet Can",
            location: "Hall B",
        },
        {
            time: "15:15 - 16:00",
            title: "Software Developer Trends",
            speaker: "Elif Kaya",
            location: "Hall A",
        },
        {
            time: "16:15 - 17:00",
            title: "Closing & Certificate Distribution",
            speaker: "Organization Team",
            location: "Main Hall",
        }
    ],
    day2: [
        {
            time: "09:30 - 10:00",
            title: "Registration and Welcome",
            speaker: "Organization Team",
            location: "Entrance Hall",
        },
        {
            time: "10:00 - 11:00",
            title: "Opening Speech",
            speaker: "Ahmet Yılmaz",
            location: "Main Hall",
        },
        {
            time: "11:15 - 12:00",
            title: "Artificial Intelligence and the Future",
            speaker: "Ayşe Demir",
            location: "Hall A",
        },
        {
            time: "13:00 - 14:00",
            title: "Networking & Lunch",
            speaker: "Tüm Katılımcılar",
            location: "Fuaye Alanı",
        },
        {
            time: "14:15 - 15:00",
            title: "cloud technologies",
            speaker: "Mehmet Can",
            location: "Hall B",
        },
        {
            time: "15:15 - 16:00",
            title: "Software Developer Trends",
            speaker: "Elif Kaya",
            location: "Hall A",
        }
    ]
};

export default function Calendar() {
    const [activeDay, setActiveDay] = useState("day1");
    return (
        <div className="p-8 pt-24">
            <h1 className="text-3xl font-serif mb-6 text-center text-blue-600">
                Event Schedule
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events[activeDay].map((event, index) => (
                    <div
                        key={index}
                        className="bg-white/50 shadow-lg rounded-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition"
                    >
                        <p className="text-sm text-gray-500 mb-2">{event.time}</p>
                        <h2 className="text-xl font-semibold">{event.title}</h2>
                        <div className="flex items-center gap-2">
                            <Presentation className="w-5 h-5 text-blue-900" />
                            <span className="font-medium">{event.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-900" />
                            <span className="font-medium">{event.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
