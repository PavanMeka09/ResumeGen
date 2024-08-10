import React from 'react'

export function personal() {
  return (
    <form className="flex justify-evenly items-center flex-col">
        <div>
          <div>
            <label
              htmlFor="photo"
              className="px-[4rem] py-[3rem] cursor-pointer border-[1px] border-zinc-950 rounded-full text-4xl"
            >
              +
            </label>
            <input type="file" id="photo" className="invisible" />
          </div>
          <div>
            <label htmlFor="fullName">Full Name: </label>
            <input id="fullName" />
          </div>
        </div>
        <button type="submit">
          <Btn title="Submit" />
        </button>
      </form>
  )
}