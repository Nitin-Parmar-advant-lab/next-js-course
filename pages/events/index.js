import { Fragment } from "react/jsx-runtime";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function EvenPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    );
}
