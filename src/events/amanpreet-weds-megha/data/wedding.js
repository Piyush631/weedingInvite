/**
 * Both links render the same website, story, programme, and venue.
 * The wedding page counts down to the wedding morning.
 * The reception page counts down to Reception of Barat the same evening.
 *
 * Names, dates, and the programme are taken from the printed invitation.
 * Photographs are the couple portraits supplied for this invitation.
 */
const weddingDateISO = "2026-12-04T09:00:00+05:30";
const baratDateISO = "2026-12-04T18:00:00+05:30";

const residenceMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Village+Bhadwal+Matour+Dharamshala+Kangra+Himachal+Pradesh+176001";

const residence = {
  id: "wedding",
  label: "At Their Residence",
  name: "Their Residence",
  address:
    "Vill. Bhadwal, P.O. Matour, Teh. Dharamshala, Distt. Kangra (H.P.) - 176001",
  location: "Dharamshala",
  mapsUrl: residenceMapsUrl,
  description:
    "The wedding will be held at their residence in Village Bhadwal.\nJoin the family for three days of celebrations.",
};

const residenceLine = "Their Residence, Vill. Bhadwal";

// The same three-day programme appears on both invitation links.
const sharedSchedule = [
  {
    id: "dham",
    offset: -1,
    location: residenceLine,
    items: [
      { title: "Dham", time: "12:00 Noon – 6:00 PM" },
      { title: "Mehandi / Ladies Sangeet", time: "5:00 PM" },
    ],
  },
  {
    id: "wedding",
    offset: 0,
    note: "(Wedding Day)",
    location: residenceLine,
    items: [
      { title: "Samuhat", time: "9:00 AM" },
      { title: "Shanti Hawan", time: "11:00 AM" },
      { title: "Reception of Barat", time: "6:00 PM" },
    ],
  },
  {
    id: "vidai",
    offset: 1,
    location: residenceLine,
    items: [{ title: "Vidai", time: "10:00 AM" }],
  },
];

const sharedSections = {
  scheduleTitle: "Programme",
  scheduleBaseDateISO: weddingDateISO,
  schedule: sharedSchedule,
  venues: [residence],
  letter:
    "Joyfully invite you and your family to the auspicious occasion of the wedding of their beloved daughter.",
};

export const wedding = {
  firstName: "Renu",
  secondName: "Rohit",
  title: "Renu weds Rohit",
  names: "Renu & Rohit",
  spokenNames: "Renu and Rohit",
  monogram: "RR",
  hosts: "Smt. Kiran Bala & Sh. Harnam Singh",
  groomLine: "Rohit, son of Sh. Asha Devi & Sh. Ranjit Singh",
  groomHome:
    "V.P.O. Rajiana 53 Mile, Teh. Nagrota Bagwan, Distt. Kangra (H.P.)",
  signoff: "With Warm Regards",
  signoffNames: "All Relatives & Friends",
  rsvp: {
    names: "Rajat Kumar & All Family Members",
    phones: ["9816329816", "9882622025"],
  },

  events: {
    wedding: {
      ...sharedSections,
      label: "Wedding",
      heroLabel: "Wedding",
      headlineDate: "3 – 5 December 2026",
      dateISO: weddingDateISO,
      countdownLabel: "wedding",
      venue: residence,
    },
    reception: {
      ...sharedSections,
      label: "Reception of Barat",
      heroLabel: "Reception of Barat",
      headlineDate: "4 December 2026",
      dateISO: baratDateISO,
      countdownLabel: "reception of barat",
      venue: residence,
    },
  },
};

// Format calendar dates in UTC to keep the calendar day the same worldwide.
// Countdown uses the actual ISO timezone offset.
function calendarDate(iso) {
  return new Date(`${iso.slice(0, 10)}T12:00:00Z`);
}

function formatDate(iso, options) {
  return new Intl.DateTimeFormat("en-GB", {
    ...options,
    timeZone: "UTC",
  }).format(calendarDate(iso));
}

function shiftDate(iso, offset) {
  const date = calendarDate(iso);
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

/** One display-ready event config selected by the current URL. */
export function getInvitation(variant = "wedding") {
  const key = variant === "reception" ? "reception" : "wedding";
  const event = wedding.events[key];
  const dates = [event.dateISO];
  const dateLine = dates
    .map((iso) => formatDate(iso, { day: "numeric", month: "long" }))
    .join(" & ");
  const invitationDate = dates
    .map((iso) =>
      formatDate(iso, { day: "numeric", month: "long", year: "numeric" }),
    )
    .join(" & ");
  const headline = event.headlineDate || invitationDate;

  return {
    ...event,
    variant: key,
    year: formatDate(event.dateISO, { year: "numeric" }),
    dateLine: event.headlineDate
      ? event.headlineDate.replace(/\s+\d{4}$/, "")
      : dateLine,
    dateLabel: headline.toLowerCase(),
    joinDateLabel: headline,
    footerDate: headline,
    footerLabel: event.label,
    footerLocation: residence.location,
    schedule: event.schedule.map((day) => ({
      ...day,
      title: formatDate(
        day.dateISO || shiftDate(event.scheduleBaseDateISO, day.offset),
        {
          weekday: "long",
          day: "numeric",
          month: "long",
        },
      ),
    })),
    menuLinks: [
      { id: "top", label: "The Invitation" },
      { id: "letter", label: "A Note" },
      { id: "weekend", label: event.scheduleTitle },
      { id: "place", label: "The Venue" },
      { id: "second-invitation", label: "Our Story" },
    ],
  };
}
