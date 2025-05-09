// Get

export async function getData(skip, limit) {
  const req = await fetch(
    `https://json-api.uz/api/project/fn37/todos?skip=${skip}&limit=${limit}`
  );
  if (req.status === 200) {
    const result = await req.json();
    return result.data;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}

// Add
export async function addData(data) {
  const req = await fetch("https://json-api.uz/api/project/fn37/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (req.status === 200) {
    const result = await req.json();
    return result.data;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}

// Detele

export async function deleteById(id) {
  const req = await fetch(` https://json-api.uz/api/project/fn37/todos/${id}`, {
    method: "DELETE",
  });
}
