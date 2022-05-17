function getNameInitials(name) {
  let regex = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...name.matchAll(regex)] || [];

  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  return initials;
}

export default getNameInitials;
