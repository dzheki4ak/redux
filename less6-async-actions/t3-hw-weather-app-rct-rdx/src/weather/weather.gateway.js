export const getCitiesList = () =>
  fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities').then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return new Error('Something went wrong');
    },
  );
