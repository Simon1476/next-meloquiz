export default function formatDuration(duration: number) {
  const durationInSeconds = duration / 1000;

  const durationInMinutes = Math.floor(durationInSeconds / 60);

  const remainingSeconds = Math.floor(
    durationInSeconds % (60 * durationInMinutes)
  );
  const padded_seconds = remainingSeconds.toString().padStart(2, "0");

  return `${durationInMinutes}:${padded_seconds}`;
}
