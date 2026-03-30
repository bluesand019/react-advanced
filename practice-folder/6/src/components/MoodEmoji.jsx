const MoodEmoji = ({ count }) => {
  let mood = "😴";
  let message = "I'm sleepy...";

  if (count > 0 && count < 5) {
    mood = "😊";
    message = "Getting started!";
  } else if (count >= 5 && count < 10) {
    mood = "🚀";
    message = "Lifting off!";
  } else if (count >= 10) {
    mood = "🔥";
    message = "YOU ARE UNSTOPPABLE!";
  }

  return (
    <div style={{ textAlign: 'center', margin: '15px 0' }}>
      <div style={{ fontSize: '3rem', transition: 'transform 0.2s', transform: count > 0 ? 'scale(1.2)' : 'scale(1)' }}>
        {mood}
      </div>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{message}</p>
    </div>
  );
};

export default MoodEmoji;