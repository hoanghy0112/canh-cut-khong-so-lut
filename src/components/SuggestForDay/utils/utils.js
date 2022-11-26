export function getEndDate(startDate = new Date()) {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + ((7 - endDate.getDay()) % 7 || 7));
  endDate.setHours(23);
  endDate.setMinutes(59);
  endDate.setSeconds(59);
  return endDate;
}

export function getInitialTimeList(startDate = new Date()) {
  const endDate = getEndDate(startDate);

  return [
    {
      from: startDate,
      to: endDate,
    },
  ];
}

export function splitBusyTime(initialList, busyTime) {
  const filteredTime = [...initialList];
  const busyTimeList = [...busyTime];

  busyTimeList.sort(
    (a, b) => new Date(a.from).getTime() - new Date(b.from).getTime(),
  );

  busyTimeList.forEach(({ from, to }) => {
    const lastTime = filteredTime.slice(-1)[0];
    if (
      new Date(from) < new Date(lastTime.to) &&
      new Date(from) > new Date(lastTime.from) &&
      new Date(to) < new Date(lastTime.to) &&
      new Date(to) > new Date(lastTime.from)
    ) {
      const firstPiece = { from: lastTime.from, to: from };
      const secondPiece = { from: to, to: lastTime.to };
      filteredTime.pop();
      filteredTime.push(firstPiece, secondPiece);
    } else if (
      new Date(to) < new Date(lastTime.to) &&
      new Date(to) > new Date(lastTime.from)
    ) {
      const newPiece = { from: to, to: lastTime.to };
      filteredTime.pop();
      filteredTime.push(newPiece);
    }
  });

  return filteredTime;
}

export function splitDay(initialList) {
  const filteredTime = [...initialList];

  let i = filteredTime.length - 1;
  while (i >= 0) {
    const { from: from_, to: to_ } = filteredTime[i];
    const from = new Date(from_);
    const to = new Date(to_);
    if (from.getDay() !== to.getDay()) {
      filteredTime.splice(i, 1);
      const middle = new Date(from);
      middle.setHours(23, 59, 59);
      filteredTime.push({
        from,
        to: middle,
      });
      const otherMiddle = new Date(from);
      otherMiddle.setDate(otherMiddle.getDate() + 1);
      otherMiddle.setHours(0, 0, 1);
      filteredTime.unshift({
        from: otherMiddle,
        to,
      });
      i += 1;
    }
    i -= 1;
  }

  return filteredTime;
}
