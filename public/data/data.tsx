export const sites = {
    "Pharsalia Landfill": {
        name: "Pharsalia Landfill",
        address: "439 County Road 47, Norwich, NY 13815",
        phone: "607-337-1769",
        hours: "Monday - Friday: 8 am to 4 pm, Saturday: 8 am to Noon",
        services: [
            "Recycling",
            "Refuse Disposal",
            "Asbestos Disposal* (See rules)",
            "Sludge Disposal* (See rules)",
        ],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.4816145261984!2d-75.67728022426716!3d42.566299071174576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dbb50bb34b67c1%3A0x43b4d568b549f5cd!2sPharsalia%20Facility!5e0!3m2!1sen!2sus!4v1705086953851!5m2!1sen!2sus"},
    "North Norwich Transfer Station": {
        name: "North Norwich Transfer Station",
        address: "6701 Nys 12, Norwich, NY 13815",
        phone: "607-337-1815",
        hours: "Monday: 8 am to Noon, Tuesday - Saturday: 8 am to 4 pm",
        services: [
            "Recycling",
            "Refuse Disposal",
        ],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.359210908221!2d-75.53560922426581!3d42.59012167117243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dbc96658dc4119%3A0x902504ad4ceaf4e7!2sNorth%20Norwich%20Transfer%20Station!5e0!3m2!1sen!2sus!4v1705087690734!5m2!1sen!2sus"},
    "Brisben Transfer Station": {
        name: "Brisben Transfer Station",
        address: "177 Coutermarsh Rd, Greene, NY 13778",
        phone: "607-656-7718",
        hours: "Monday: 8 am to Noon, Tuesday - Saturday: 8 am to 4 pm",
        services: [
            "Recycling",
            "Refuse Disposal",
        ],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.359210908221!2d-75.53560922426581!3d42.59012167117243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dbc96658dc4119%3A0x902504ad4ceaf4e7!2sNorth%20Norwich%20Transfer%20Station!5e0!3m2!1sen!2sus!4v1705087690734!5m2!1sen!2sus"},
}

export const types = {
    'batteries': {
        name: "Batteries",
        disposal: "Batteries can be disposed of at all locations",
        cost: "Free",
        rules: ["Lithium ion terminals must be taped with clear tape."],
    }, 
    'paint': {
        name: "Paint",
        disposal: "Paint can be disposed of at all locations",
        cost: "Free",
        rules: ["Paint must be in original container.", "Containers must be 5 gallons or less."],
    }, 
    'electronics': {
        name: "Electronics",
        disposal: "Electronics can be disposed of at all locations",
        cost: "Free",
        rules: [],
    },
    'tires': {
        name: "Tires",
        disposal: "Tires can be disposed of at all locations",
        cost: "$3.50 per tire up to 20 inches, $155/ton for larger tires",
        rules: [],
    },
    'flourescent bulbs': {
        name: "Flourescent Bulbs",
        disposal: "Flourescent Bulbs can be disposed of at all locations",
        cost: "Free",
        rules: ["Limit of 2 bulbs per resident per day."],
    },
    'used oil': {
        name: 'Used motor oil and antifreeze',
        disposal: "Used motor oil and antifreeze can be disposed of at all locations",
        cost: "Free",
        rules: ["Limit of 5 gallons per resident per day."],
    },
    'scrap metal': {
        name: "Scrap Metal",    
        disposal: "Scrap metal can be disposed of at all locations",
        cost: "Appliances containing freon will be charged a $15 fee.",
        rules: ['Scrap metal and appliances not containing freon are accepted free of charge.'],
    },
    'plastics': {
        name: "Plastics",
        disposal: "Plastics can be disposed of at all locations",
        cost: "Free",   
        rules: ["Plastics must be clean and dry.", "Plastics must be sorted by type."],
    },
}