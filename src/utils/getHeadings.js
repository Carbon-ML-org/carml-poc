function getHeadings($headings) {
  const headings = [];

  $headings.forEach(($heading) => {
    const { innerText: title, id } = $heading;

    if ($heading.nodeName === "H5") {
      headings.push({ id, title, items: [] });
    } else if ($heading.nodeName === "H6" && headings.length > 0) {
      headings[headings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return headings;
}

export default getHeadings;
