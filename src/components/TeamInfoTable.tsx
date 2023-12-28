import React from "react";

export interface Media {
  url: string;
  name: string;
}

export interface TeamInfo {
  number: number;
  name: string;
  location: string;
  media?: Media[];
}

export default function TeamInfoTable(props: {
  teamInfo: TeamInfo[];
}): JSX.Element {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          {props.teamInfo.map((t) => (
            <tr className="bg-white border-b  hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {t.number}
              </th>
              <td className="px-6 py-4">{t.name}</td>
              <td className="px-6 py-4">{t.location}</td>
              <td className="px-6 py-4">
                <div className="inline-flex rounded-md shadow-sm " role="group">
                  {t.media?.map((m) => (
                    <a
                      href={m.url}
                      className="px-4 py-2 text-sm font-medium first:rounded-s-lg last:rounded-e-lg text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      {m.name}
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeaturedTeamInfos(props: {
  teamInfo: TeamInfo[];
  year: number;
}): JSX.Element {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl font-display">
            {props.year} Featured Teams
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {props.teamInfo.map((t) => (
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  {t.number} - {t.name}
                </h2>

                <p className="mt-1 text-sm text-gray-600">{t.location}</p>
                <p className="mt-1 text-sm text-gray-300">
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    {t.media?.map((m) => (
                      <a
                        href={m.url}
                        className="px-4 py-2 text-sm font-medium first:rounded-s-lg last:rounded-e-lg text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        {m.name}
                      </a>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
