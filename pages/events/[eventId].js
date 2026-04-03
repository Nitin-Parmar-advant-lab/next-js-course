import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

function EventDetailPage(props) {
    const event = props.selectedEvent;

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        );
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const eventId = context.props.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event,
        },
        reavalidate: 30,
    };
}

export async function getStaticPath() {
    const events = await getFeaturedEvents();

    const paths = events.map((event) => ({
        params: {
            eventId: "",
        },
    }));

    return {
        paths: paths,
        fallback: 'blocking',
    };
}

export default EventDetailPage;
