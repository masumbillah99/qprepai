// fetch all data
export const fetchAllSessionsData = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/sessions/my-sessions`,
      { credentials: 'include' }
    )
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      console.error('Failed to fetch sessions')
    }
  } catch (err) {
    console.error('Error fetching sessions:', err)
  }
}
