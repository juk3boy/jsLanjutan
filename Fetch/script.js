/** FECTH */

/** Fetch adalah sebuah API yg ada di javascript modern untk mengambil data secara asyncronhous */

/** Sebuah metode pada API Javascritp utk mengambil resources dari jaringan dan mengembalikan Promise yang selesai(fullfilled) ketika ada response yang tersedia */


/**
 * fetch(resource, init);
 *
 * Resouce, itu bisa 2 yaitu :
 * URL : alamat dari sumber yang kita ambil
 *
 * Request Object : Repesentasi dari permintaan sumber (resoure)
 *
 * Sedangkan untuk Init yaitu Optional
 * didalamnya bisa kita beri konfugursi tambahan saat kita mengirimin request nya dan bentuk nya object
 *
 * Beberapa diantaranya spt dibawah ini:
 * - method
 * - headers
 * - body
 * - mode
 * - cache
 * - referrer
 * - referrerPolicy
 * - integrity
 * - keepalive
 * - signal
 *
 */

/** sedangkan untuk response nya sendiri (apa yg dikembalikan dari si fetch nya itu) */
/**
 * hasilnya berupa Promise
 *
 * Response (Property) :
 * - headers
 * - ok
 * - redirected
 * - status
 * - statusText
 * - type
 * - url
 * - body
 *
 *
 * Response (Method)
 * - clone()
 * - error()
 * - redirect()
 * - blob()
 * - formData()
 * - json()
 * - text()
 *
 * Rata-rata dari method yaitu mengembalikan Promise
 */