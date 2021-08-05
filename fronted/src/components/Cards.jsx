/* This example requires Tailwind CSS v2.0+ */
const events = [
  {
    title: 'Clean X beach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    owner: 'Roel Aufderehar'
  },
  {
    title: 'Help out after wildfires in Y',

    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    owner: 'Brenna Goyette'
  },
  {
    title: 'Plant trees in X place',

    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    owner: 'Daniela Metz'
  }
];

const Cards = () => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-green-600 sm:text-4xl">Community Events</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Check the list of available events aiming to help out earth. Reach out and participate or add your own event.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {events.map(event => (
            <div key={event.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden text-green-600">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-green-800">{event.title}</p>
                  <p className="mt-3 text-base text-gray-500">{event.description}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-600">{event.owner}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
