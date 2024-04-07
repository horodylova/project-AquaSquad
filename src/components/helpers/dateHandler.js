const dateHandler = (currentDate = new Date()) => {
  const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const timeFormatter = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const time = timeFormatter.format(currentDate);
  const date = dateFormatter.format(currentDate);

  return {
    date,
    time,
  };
};

export default dateHandler;
