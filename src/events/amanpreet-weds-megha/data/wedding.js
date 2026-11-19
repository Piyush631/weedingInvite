/**
 * Two family invitations share this website.
 * "bride" is Renu's family in Village Bhadwal.
 * "groom" is Rohit's family in Village Rajiana.
 *
 * Each family link has a wedding page and a barat page.
 * Photographs are the couple portraits supplied for this invitation.
 */
const brideWeddingDateISO = "2026-12-04T09:00:00+05:30";
const brideBaratDateISO = "2026-12-04T18:00:00+05:30";
const groomWeddingDateISO = "2026-12-04T11:00:00+05:30";
const groomBaratDateISO = "2026-12-04T18:00:00+05:30";

const bhadwalMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Village+Bhadwal+Matour+Dharamshala+Kangra+Himachal+Pradesh+176001";
const rajianaMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Village+Rajiana+53+Mile+Nagrota+Bagwan+Kangra+Himachal+Pradesh";

const bhadwal = {
  id: "wedding",
  label: "At Their Residence",
  name: "Their Residence",
  address:
    "Vill. Bhadwal, P.O. Matour, Teh. Dharamshala, Distt. Kangra (H.P.) - 176001",
  location: "Dharamshala",
  mapsUrl: bhadwalMapsUrl,
  description:
    "The wedding will be held at their residence in Village Bhadwal.\nJoin the family for three days of celebrations.",
};

const rajiana = {
  id: "wedding",
  label: "At Their Residence",
  name: "Their Residence",
  address:
    "Vill. Rajiana, P.O. 53 Mile, Teh. Nagrota Bagwan, Distt. Kangra (H.P.)",
  location: "Nagrota Bagwan",
  mapsUrl: rajianaMapsUrl,
  description:
    "The wedding ceremony of their loving son will be held at their residence in Village Rajiana.\nJoin the family for three days of celebrations.",
};

const bhadwalLine = "Their Residence, Vill. Bhadwal";
const rajianaLine = "Their Residence, Vill. Rajiana";

const brideSchedule = [
  {
    id: "dham",
    offset: -1,
    location: bhadwalLine,
    items: [
      { title: "Dham", time: "12:00 Noon – 6:00 PM" },
      { title: "Mehandi / Ladies Sangeet", time: "5:00 PM" },
    ],
  },
  {
    id: "wedding",
    offset: 0,
    note: "(Wedding Day)",
    location: bhadwalLine,
    items: [
      { title: "Samuhat", time: "9:00 AM" },
      { title: "Shanti Hawan", time: "11:00 AM" },
      { title: "Reception of Barat", time: "6:00 PM" },
    ],
  },
  {
    id: "vidai",
    offset: 1,
    location: bhadwalLine,
    items: [{ title: "Vidai", time: "10:00 AM" }],
  },
];

const groomSchedule = [
  {
    id: "mehndi",
    offset: -1,
    location: rajianaLine,
    items: [{ title: "Mehndi & Ladies Sangeet", time: "8:00 PM" }],
  },
  {
    id: "wedding",
    offset: 0,
    note: "(Wedding Day)",
    location: rajianaLine,
    items: [
      { title: "Samut & Ladies Sangeet", time: "11:00 AM" },
      { title: "Shanti Hawan", time: "1:00 PM" },
      { title: "Priti Bhoj", time: "2:00 PM" },
      { title: "Sehra Bandi", time: "3:00 PM" },
      { title: "Departure of Barat", time: "6:00 PM" },
    ],
  },
  {
    id: "dham",
    offset: 1,
    location: rajianaLine,
    items: [
      { title: "Badhu Parvesh", time: "11:00 AM" },
      { title: "Dham", time: "1:00 PM – 6:00 PM" },
    ],
  },
];

function familyEvents({
  venue,
  schedule,
  baseDateISO,
  baratDateISO,
  letter,
  baratLabel,
}) {
  const shared = {
    scheduleTitle: "Programme",
    scheduleBaseDateISO: baseDateISO,
    schedule,
    venues: [venue],
    letter,
  };

  return {
    wedding: {
      ...shared,
      label: "Wedding",
      heroLabel: "Wedding",
      headlineDate: "3 – 5 December 2026",
      dateISO: baseDateISO,
      countdownLabel: "wedding",
      venue,
    },
    reception: {
      ...shared,
      label: baratLabel,
      heroLabel: baratLabel,
      headlineDate: "4 December 2026",
      dateISO: baratDateISO,
      countdownLabel: baratLabel.toLowerCase(),
      venue,
    },
  };
}

const profiles = {
  bride: {
    firstName: "Renu",
    secondName: "Rohit",
    title: "Renu weds Rohit",
    names: "Renu & Rohit",
    spokenNames: "Renu and Rohit",
    monogram: "RR",
    hosts: "Smt. Kiran Bala & Sh. Harnam Singh",
    partnerLine: "Rohit, son of Sh. Asha Devi & Sh. Ranjit Singh",
    partnerHome:
      "V.P.O. Rajiana 53 Mile, Teh. Nagrota Bagwan, Distt. Kangra (H.P.)",
    signoff: "With Warm Regards",
    signoffNames: "All Relatives & Friends",
    rsvp: {
      names: "Rajat Kumar & All Family Members",
      phones: ["9816329816", "9882622025"],
    },
    events: familyEvents({
      venue: bhadwal,
      schedule: brideSchedule,
      baseDateISO: brideWeddingDateISO,
      baratDateISO: brideBaratDateISO,
      letter:
        "Joyfully invite you and your family to the auspicious occasion of the wedding of their beloved daughter.",
      baratLabel: "Reception of Barat",
    }),
  },
  groom: {
    firstName: "Rohit",
    secondName: "Renu",
    title: "Rohit weds Renu",
    names: "Rohit & Renu",
    spokenNames: "Rohit and Renu",
    monogram: "RR",
    hosts: "Smt. Asha Devi & Sh. Ranjit Singh Paterwal",
    partnerLine: "Renu, daughter of Smt. Kiran Bala & Sh. Harnam Singh",
    partnerHome: "Vill. Bhadwal, P.O. Matour, Distt. Kangra",
    signoff: "With Best Compliments",
    signoffNames: "All Relative & Friends",
    rsvp: {
      names: "All Family",
      phones: ["8628910735", "9662809447", "8288943932"],
    },
    events: familyEvents({
      venue: rajiana,
      schedule: groomSchedule,
      baseDateISO: groomWeddingDateISO,
      baratDateISO: groomBaratDateISO,
      letter:
        "Have the privilege to solicit your esteemed presence on the auspicious occasion of the wedding ceremony of their loving son.",
      baratLabel: "Departure of Barat",
    }),
  },
};

export const wedding = profiles.bride;

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
export function getInvitation(variant = "wedding", side = "bride") {
  const profile = profiles[side] || profiles.bride;
  const key = variant === "reception" ? "reception" : "wedding";
  const event = profile.events[key];
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
    firstName: profile.firstName,
    secondName: profile.secondName,
    title: profile.title,
    names: profile.names,
    spokenNames: profile.spokenNames,
    monogram: profile.monogram,
    hosts: profile.hosts,
    partnerLine: profile.partnerLine,
    partnerHome: profile.partnerHome,
    signoff: profile.signoff,
    signoffNames: profile.signoffNames,
    rsvp: profile.rsvp,
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
    footerLocation: event.venue.location,
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
