document.addEventListener('DOMContentLoaded', function () {
    fetch('https://pd-api-firebase-default-rtdb.firebaseio.com/Cursos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            Object.values(data).forEach(course => {
                if (course && course.Pic && course.Nombre && course.Videos) {
                    const courseCard = document.createElement('div');
                    courseCard.classList.add('w-full', 'md:w-1/2', 'lg:w-1/4', 'pl-5', 'pr-5', 'mb-5', 'lg:pl-3', 'lg:pr-2');
                    courseCard.innerHTML = `
                        <div class="bg-white rounded-lg m-h-64 p-1 hover:bg-blua transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                            <figure class="mb-1">
                                <img src="${course.Pic}" alt="" class="h-64 ml-auto mr-auto" />
                            </figure>
                            <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
                                <div>
                                    <h5 class="text-white text-2xl font-bold leading-none">
                                        ${course.Nombre}
                                    </h5>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-lg text-white font-light">
                                        ${course.Videos}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(courseCard);
                } else {
                    console.error('No se pudo recuperar la información del curso:', course);
                }
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
});