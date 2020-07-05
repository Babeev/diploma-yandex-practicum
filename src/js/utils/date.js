export function date(time, type) {
  const date = new Date(time);
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  if(type == 'card') {
    return `${date.getDate()} ${month}, ${year}`;
  } else {
    return `${date.getDate()}, ${day}`;
  }
}