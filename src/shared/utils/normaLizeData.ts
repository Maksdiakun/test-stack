import moment from 'moment';

export const getTimeFromNow = (date: number) => {
    return moment.unix(date).fromNow();
};

export const formatLabelByCount = (count: number, label: string) => {
    const newLabel = count * count === 1 ? label : label + 's';
    return `${count} ${newLabel}`;
};
