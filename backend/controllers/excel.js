export async function fillHome(month, year) {
    const homeData = [];

    for (let i = 0; i < 11-month; i++) {
        homeData[i] = await getHoursByMonth(i+month+1, year-1);
    }
    for (let j = 0; j < month+1; j++) {
        homeData[j+11-month] = await getHoursByMonth(j, year);
    }
    return homeData;
}

export async function fillGender(month, year) {
    const genderData = [];

    for (let i = 0; i < 11-month; i++) {
        genderData[i] = await getGenderByMonth(i+month+1, year-1);
    }
    for (let j = 0; j < month+1; j++) {
        genderData[j+11-month] = await getGenderByMonth(j, year);
    }
    return genderData;
}





export const home = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Total Hours', key: 'hours', width: 10 },
    { header: 'No. of Events', key: 'eventNum', width: 10 },
];

export const gender = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Males (Hours)', key: 'maleHours', width: 10 },
    { header: 'Males (Event)', key: 'maleEvents', width: 30},
    { header: 'Females (Hours)', key: 'femaleHours', width: 10 },
    { header: 'Females (Event)', key: 'femaleEvents', width: 30},
];

export const age = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Below 18 (Hours)', key: 'below18Hours', width: 10 },
    { header: 'Below 18 (Event)', key: 'below18Events', width: 30},
    { header: '18-25 (Hours)', key: 'below25Hours', width: 10 },
    { header: '18-25 (Event)', key: 'below25Events', width: 30},
    { header: '26-35 (Hours)', key: 'below35Hours', width: 10 },
    { header: '26-35 (Event)', key: 'below35Events', width: 30},
    { header: '36-45 (Hours)', key: 'below45Hours', width: 10 },
    { header: '36-45 (Event)', key: 'below45Events', width: 30},
    { header: '46-55 (Hours)', key: 'below55Hours', width: 10 },
    { header: '46-55 (Event)', key: 'below55Events', width: 30},
    { header: '56-65 (Hours)', key: 'below65Hours', width: 10 },
    { header: '56-65 (Event)', key: 'below65Events', width: 30},
    { header: 'Above 65 (Hours)', key: 'above65Hours', width: 10 },
    { header: 'Above 65 (Event)', key: 'above65Events', width: 30},
];

export const ethnicity = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Chinese (Hours)', key: 'chineseHours', width: 10 },
    { header: 'Chinese (Event)', key: 'chineseEvents', width: 30},
    { header: 'Malay (Hours)', key: 'malayHours', width: 10 },
    { header: 'Malay (Event)', key: 'malayEvents', width: 30},
    { header: 'Indian (Hours)', key: 'indianHours', width: 10 },
    { header: 'Indian (Event)', key: 'indianEvents', width: 30},
    { header: 'Others (Hours)', key: 'othersHours', width: 10 },
    { header: 'Others (Event)', key: 'othersEvents', width: 30},
];

export const education = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Primary School (Hours)', key: 'primaryHours', width: 10 },
    { header: 'Primary School (Event)', key: 'primaryEvents', width: 30},
    { header: 'Secondary School (Hours)', key: 'secondaryHours', width: 10 },
    { header: 'Secondary School (Event)', key: 'secondaryEvents', width: 30},
    { header: 'Tertiary Level (Hours)', key: 'tertiaryHours', width: 10 },
    { header: 'Tertiary Level (Event)', key: 'tertiaryEvents', width: 30},
    { header: 'University (Hours)', key: 'universityHours', width: 10 },
    { header: 'University (Event)', key: 'universityEvents', width: 30},
];

export const occupation = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Student (Hours)', key: 'studentHours', width: 10 },
    { header: 'Student (Event)', key: 'studentEvents', width: 30},
    { header: 'Working (Hours)', key: 'workingHours', width: 10 },
    { header: 'Working (Event)', key: 'workingEvents', width: 30},
    { header: 'Not working (Hours)', key: 'notWorkingHours', width: 10 },
    { header: 'Not working (Event)', key: 'notWorkingEvents', width: 30},
];

export const immigration = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Singaporean (Hours)', key: 'singaporeanHours', width: 10 },
    { header: 'Singaporean (Event)', key: 'singaporeanEvents', width: 30},
    { header: 'PR (Hours)', key: 'prHours', width: 10 },
    { header: 'PR (Event)', key: 'prEvents', width: 30},
    { header: 'EP (Hours)', key: 'foreignerHours', width: 10 },
    { header: 'EP (Event)', key: 'foreignerEvents', width: 30},
    { header: 'DP (Hours)', key: 'foreignerHours', width: 10 },
    { header: 'DP (Event)', key: 'foreignerEvents', width: 30},
    { header: 'LOC (Hours)', key: 'foreignerHours', width: 10 },
    { header: 'LOC (Event)', key: 'foreignerEvents', width: 30},
    { header: 'WP (Hours)', key: 'foreignerHours', width: 10 },
    { header: 'WP (Event)', key: 'foreignerEvents', width: 30},
    { header: 'Visitor (Hours)', key: 'foreignerHours', width: 10 },
    { header: 'Visitor (Event)', key: 'foreignerEvents', width: 30},
];

export const interests = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Elderly', key: 'elderly', width: 10 },
    { header: 'Youth', key: 'youth', width: 10 },
    { header: 'Special Needs', key: 'specialNeeds', width: 10 },
    { header: 'Blind', key: 'blind', width: 10 },
];

export const skills = [
    { header: 'Month', key: 'months', width: 10 },
    { header: 'Photo/videography', key: 'photo', width: 10 },
    { header: 'Art & Craft', key: 'artCraft', width: 10 },
    { header: 'language', key: 'language', width: 10 },
    { header: 'Performing', key: 'performing', width: 10 },
    { header: 'Sports', key: 'sports', width: 10 },
    { header: 'Teaching', key: 'teaching', width: 10 },
    { header: 'Admin', key: 'admin', width: 10 },
    { header: 'Planning', key: 'planning', width: 10 },
    { header: 'Facilitation', key: 'facilitation', width: 10 },
];