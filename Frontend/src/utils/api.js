export async function getHello() {
    const res = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/hello`);
    const data = await res.json();
    return data;
}
export async function getDummy() {
    const res = await fetch(`${process.env.VUE_APP_BACKEND_URL}/api/dummy`);
    if (!res.ok) {
        throw new Error(`Failed to fetch data:${res.statusText}`)
    }
    const data = await res.json();
    return data;
}
