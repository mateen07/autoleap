const state = {
  bays: 2,
  day: "Tuesday",
  slots: ["10:30 AM", "2:00 PM"],
  confirmed: "Tuesday, 2:00 PM"
};

document.getElementById("signalHeadline").textContent = `${state.bays} open bays next ${state.day}`;
document.getElementById("signalSub").textContent = state.slots.join(", ");
document.getElementById("bookingTime").textContent = state.confirmed;
