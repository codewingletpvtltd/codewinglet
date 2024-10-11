export const formatDate = (date: string | Date | null) => {
  if (!date) {
    return 'No date available';
  }

  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
