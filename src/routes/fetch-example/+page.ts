export async function load() {
  // Simulate fake data on first load
  const fakeData = {
    title: 'Fetch Example',
    initialFact: 'This is a fake fact loaded on first render!',
    timestamp: new Date().toISOString(),
    loading: false,
    dogFact: null as string | null
  }

  return fakeData
}