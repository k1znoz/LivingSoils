import {useCallback, useState} from 'react'
import {Stack, TextInput, Card, Text, Box} from '@sanity/ui'
import {set, unset} from 'sanity'
import type {ObjectInputProps} from 'sanity'
import {dmsToDecimal, decimalToDms} from '../utils/coordinateConverter'

interface GeopointValue {
  _type: 'geopoint'
  lat: number
  lng: number
}

export function DmsCoordinatesInput(props: ObjectInputProps) {
  const {onChange, value} = props
  const [dmsInput, setDmsInput] = useState('')
  const [error, setError] = useState('')
  const [converted, setConverted] = useState<{lat: number; lng: number} | null>(null)

  const handleDmsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.currentTarget.value
      setDmsInput(input)
      setError('')

      if (!input.trim()) {
        onChange(unset())
        setConverted(null)
        return
      }

      const result = dmsToDecimal(input)

      if (result) {
        // Stocke les coordonnées décimales au format geopoint
        onChange(
          set({
            _type: 'geopoint',
            lat: result.lat,
            lng: result.lng,
          }),
        )
        setConverted(result)
        setError('')
      } else {
        setError('Format invalide. Exemple: 5°12\'36.4"N 3°45\'22.8"W')
        setConverted(null)
      }
    },
    [onChange],
  )

  // Afficher le format DMS si on a des coordonnées enregistrées
  const geopointValue = value as GeopointValue | undefined
  const displayValue =
    geopointValue && geopointValue.lat !== undefined && geopointValue.lng !== undefined
      ? decimalToDms(geopointValue.lat, geopointValue.lng)
      : ''

  return (
    <Stack space={3}>
      <TextInput
        placeholder="Ex: 5°12'36.4&quot;N 3°45'22.8&quot;W"
        value={dmsInput || displayValue}
        onChange={handleDmsChange}
      />

      {error && (
        <Card tone="critical" padding={3} radius={2}>
          <Text size={1}>{error}</Text>
        </Card>
      )}

      {converted && (
        <Card tone="positive" padding={3} radius={2}>
          <Stack space={2}>
            <Text size={1} weight="semibold">
              ✓ Coordonnées converties :
            </Text>
            <Box>
              <Text size={1}>
                Latitude: {converted.lat.toFixed(6)}° <br />
                Longitude: {converted.lng.toFixed(6)}°
              </Text>
            </Box>
          </Stack>
        </Card>
      )}

      {geopointValue && geopointValue.lat !== undefined && geopointValue.lng !== undefined && (
        <Card padding={3} radius={2} tone="transparent" border>
          <Text size={1} muted>
            Enregistré: {geopointValue.lat.toFixed(6)}°, {geopointValue.lng.toFixed(6)}°
          </Text>
        </Card>
      )}
    </Stack>
  )
}
