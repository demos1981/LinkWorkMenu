export async function getList(props) {
  const res = await fetch(props);
  return await res.json();
}

export async function createItem(newItems) {
  const url = newItems.urlProps;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newItems),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}

export async function updateItem(item) {
  const res = await fetch(item + item.id, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json",
    },
  });
  return await res.json();
}
export async function deleteItem(id, url) {
  const res = await fetch(url + id, {
    method: "DELETE",
  });
  return await res.json();
}
