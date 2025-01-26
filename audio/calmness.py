from midiutil import MIDIFile

# Create a MIDI file
midi = MIDIFile(1)
track = 0
time = 0  # Start at the beginning
channel = 0
volume = 100
tempo = 60  # BPM

# Add a track and set the tempo
midi.addTrackName(track, time, "Zen Melody")
midi.addTempo(track, time, tempo)

# Melody notes (C4, G4, A4, etc.)
melody_notes = [
    (60, 1),  # C4, quarter note
    (67, 1),  # G4, quarter note
    (69, 2),  # A4, half note
    (65, 1),  # F4, quarter note
    (64, 1),  # E4, quarter note
    (62, 2),  # D4, half note
    (60, 1),  # C4, quarter note
    (64, 1),  # E4, quarter note
    (67, 2),  # G4, half note
]

# Add melody notes to the track
for note, duration in melody_notes:
    midi.addNote(track, channel, note, time, duration, volume)
    time += duration

# Bassline notes (C2, F2, G2)
bass_notes = [(36, 4), (41, 4), (43, 4)]  # Whole notes
time = 0  # Reset time for bassline

# Add bassline notes to the track
for note, duration in bass_notes:
    midi.addNote(track, channel, note, time, duration, volume)
    time += duration

# Write MIDI to file
with open("zen_melody.mid", "wb") as midi_file:
    midi.writeFile(midi_file)

print("MIDI file created: zen_melody.mid")
