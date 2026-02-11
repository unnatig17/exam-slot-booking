const axios = require("axios");

const URL = "http://localhost:5000/api/bookings";

const slotId = "698c91f03a29cb105252d0b6";

const tokens = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjODgzN2ZjMmRkZmVjYjBjMjkzNzIiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDI5MiwiZXhwIjoxNzcwOTA2NjkyfQ.p5BlamIJzQGhetrkgwFlynU5NpGzyLyJRILMAv5UlL4",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTIyYTNhMjljYjEwNTI1MmQwYmMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDMwNSwiZXhwIjoxNzcwOTA2NzA1fQ.ETVEUekr57QNxLXkt1ZvkTN8mr_1Fcbp5ERp_9aHOds",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTIzMDNhMjljYjEwNTI1MmQwYmYiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDMxOCwiZXhwIjoxNzcwOTA2NzE4fQ.vyOywiL15F7nyL0bFognvxdnYBV95oFAfyrxpU42ezM",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTIzNDNhMjljYjEwNTI1MmQwYzIiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDMyOSwiZXhwIjoxNzcwOTA2NzI5fQ.BXBwmpRPefaGqMKZwDW8gCy6Nw39UaxTz-hz7yfIqGo",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTIzOTNhMjljYjEwNTI1MmQwYzUiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDM0MywiZXhwIjoxNzcwOTA2NzQzfQ.xL4MvdZsWqJ1uxgBfsRYfRob78BYDuPhIAwErP050IQ",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTIzZDNhMjljYjEwNTI1MmQwYzgiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDM2OCwiZXhwIjoxNzcwOTA2NzY4fQ.qXWvA3pSA73kqbBxbU13dxF5shcapX_6wB0lhlOBXI4",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTI0MTNhMjljYjEwNTI1MmQwY2IiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDM4NCwiZXhwIjoxNzcwOTA2Nzg0fQ.9LZZGUDpcREzJv88wtXxwjwgO5VCXhJIDjCiCkPf8dk",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTI0NDNhMjljYjEwNTI1MmQwY2UiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDM5OCwiZXhwIjoxNzcwOTA2Nzk4fQ.uqPeObaqtj9yY0ZcbCqQAyg2dB-CQhkmze3b4B5-aW8",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTI0ODNhMjljYjEwNTI1MmQwZDEiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDI2OSwiZXhwIjoxNzcwOTA2NjY5fQ.fH62WSUsv96u0fms5wd46pmNA6sNGuF7QyT8VVIjuTo",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OThjOTI0YzNhMjljYjEwNTI1MmQwZDQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MDgyMDIyNSwiZXhwIjoxNzcwOTA2NjI1fQ.TpbeyOXHkIqabIKpWNx-ORZ7vWpsQFYFofbu9yOC0RE"
];

const requests = tokens.map((token, i) =>
  axios.post(
    URL,
    {
      examId: slotId,
      slotId,
      requestId: `req-${i}`
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).catch(err => {
    if (err.response) return err.response.data;
    return { error: err.message };
  })
);

Promise.all(requests).then(results => {
  console.log(results);
});
