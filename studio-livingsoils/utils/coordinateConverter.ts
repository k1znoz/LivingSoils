/**
 * Convertit des coordonnées DMS (Degrés Minutes Secondes) en format décimal
 * Format attendu : "5°12'36.4"N 3°45'22.8"W" ou "5°12'36.4"N, 3°45'22.8"W"
 */
export function dmsToDecimal(dmsString: string): {lat: number; lng: number} | null {
  try {
    // Nettoyer la chaîne
    const cleaned = dmsString.trim().replace(/,/g, ' ')

    // Pattern pour matcher le format DMS
    const pattern =
      /(\d+)[°\s]+(\d+)['\s]+([0-9.]+)["'\s]*([NSEW])\s+(\d+)[°\s]+(\d+)['\s]+([0-9.]+)["'\s]*([NSEW])/i

    const match = cleaned.match(pattern)

    if (!match) {
      return null
    }

    const [, latDeg, latMin, latSec, latDir, lngDeg, lngMin, lngSec, lngDir] = match

    // Convertir latitude
    let lat = parseInt(latDeg) + parseInt(latMin) / 60 + parseFloat(latSec) / 3600

    // Convertir longitude
    let lng = parseInt(lngDeg) + parseInt(lngMin) / 60 + parseFloat(lngSec) / 3600

    // Appliquer les signes selon la direction
    if (latDir.toUpperCase() === 'S') lat = -lat
    if (lngDir.toUpperCase() === 'W') lng = -lng

    return {lat, lng}
  } catch {
    return null
  }
}

/**
 * Convertit des coordonnées décimales en format DMS
 */
export function decimalToDms(lat: number, lng: number): string {
  const latDir = lat >= 0 ? 'N' : 'S'
  const lngDir = lng >= 0 ? 'E' : 'W'

  const absLat = Math.abs(lat)
  const absLng = Math.abs(lng)

  const latDeg = Math.floor(absLat)
  const latMin = Math.floor((absLat - latDeg) * 60)
  const latSec = ((absLat - latDeg - latMin / 60) * 3600).toFixed(1)

  const lngDeg = Math.floor(absLng)
  const lngMin = Math.floor((absLng - lngDeg) * 60)
  const lngSec = ((absLng - lngDeg - lngMin / 60) * 3600).toFixed(1)

  return `${latDeg}°${latMin}'${latSec}"${latDir} ${lngDeg}°${lngMin}'${lngSec}"${lngDir}`
}
