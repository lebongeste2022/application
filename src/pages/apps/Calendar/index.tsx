import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '@fullcalendar/react';
import { DateClickArg } from '@fullcalendar/interaction';
import { EventClickArg, EventInput } from '@fullcalendar/core';

// components
import PageTitle from '../../../components/PageTitle';

import Calendar from './Calendar';
import AddEditEvent from './AddEditEvent';

// dummy data
import { defaultEvents } from './data';

// images
import calendarImg from '../../../assets/images/cal.png';

interface IntroCardProps {
    createNewEvent: () => void;
}

const IntroCard = ({ createNewEvent }: IntroCardProps) => {
    return (
        <Row className="align-items-center">
            <Col xl={2} lg={3} xs={6}>
                <img src={calendarImg} className="me-4 align-self-center img-fluid" alt="" />
            </Col>
            <Col xl={10} lg={9}>
                <div className="mt-4 mt-lg-0">
                    <h5 className="mt-0 mb-1 fw-bold">Bienvenue dans votre calendrier</h5>
                    <p className="text-muted mb-2">
                    Le calendrier affiche les événements synchronisés à partir de tous vos calendriers liés. Cliquez sur l'événement pour voir ou modifier les détails. Vous pouvez créer un nouvel événement en cliquant sur le bouton "Créer un nouvel événement" ou sur n'importe quelle cellule disponible dans le calendrier ci-dessous.
                    </p>
                    {/* add events */}
                    <Button variant="primary" className="mt-2 me-1" id="btn-new-event" onClick={createNewEvent}>
                        <i className="uil-plus-circle"></i> Créer un nouveau événement
                    </Button>
                    <Button variant="white" className="mt-2">
                        <i className="uil-sync"></i> Lier les calendriers
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

const CalendarApp = () => {
    /*
     * modal handeling
     */
    const [show, setShow] = useState<boolean>(false);
    const onCloseModal = () => {
        setShow(false);
        setEventData({});
        setDateInfo({});
    };
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    /*
     * event data
     */
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<any>({});

    /*
    calendar events
    */
    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    /*
    on add event 
    */
    const onAddEvent = (data: any) => {
        const modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents.push(event);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /*
    on update event
    */
    const onUpdateEvent = (data: any) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
        setIsEditable(false);
    };

    /*
    on remove event
    */
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // create new event
    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/calendar' },
                    { label: 'Calendar', path: '/apps/calendar', active: true },
                ]}
                title={'Calendar'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <IntroCard createNewEvent={createNewEvent} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {/* fullcalendar control */}
                            <Calendar onDateClick={onDateClick} onEventClick={onEventClick} events={events} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* add new event modal */}
            {show ? (
                <AddEditEvent
                    isOpen={show}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    eventData={eventData}
                    onUpdateEvent={onUpdateEvent}
                    onRemoveEvent={onRemoveEvent}
                    onAddEvent={onAddEvent}
                />
            ) : null}
        </>
    );
};

export default CalendarApp;
