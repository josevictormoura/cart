const URL_API =
  'https://crudcrud.com/api/ca981a1da8d64cc3a0fe5da12383ee67/products';

export async function GET() {
  try {
    const request = await fetch(URL_API);
    if (!request.ok) {
      throw new Error(`Error HTTP! status: ${request.status}`);
    }
    const json = await request.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(id) {
  if (!id) {
    throw new Error('Id invalido ou vazio!');
  }
  const URL_API_ID = `${URL_API}/${id}`;
  try {
    const response = await fetch(URL_API_ID, { method: DELETE });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(body) {
  if (!body) {
    throw new Error('O corpo da requisicao e obrigatorio');
  }
  try {
    const request = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!request.ok) {
      throw new Error(`Error HTTP! status: ${request.status}`);
    }
    const json = await request.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
