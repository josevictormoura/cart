export async function GET() {
  const URL_API =
    'https://crudcrud.com/api/96c177cfe243445fb758096d40629850/products';
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

export async function POST(body) {
  if (!body) {
    throw new Error('O corpo da requisicao e obrigatorio');
  }

  const URL_API =
    'https://crudcrud.com/api/96c177cfe243445fb758096d40629850/products';
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
