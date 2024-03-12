// export * from './seeder''
import { Kysely, MysqlDialect } from 'kysely'
import { createPool } from 'mysql2'
import type { ColumnType, Generated } from 'kysely'
import { BunWorkerDialect } from 'kysely-bun-worker'

export * from './schema'
export * from './migrations'
export * from './types'
export * from './utils'

// const driver = config.database.default
const driver = 'mysql'

// const dbName = config.database.name

export interface UsersTable {
  // Columns that are generated by the database should be marked
  // using the `Generated` type. This way they are automatically
  // made optional in inserts and updates.
  id: Generated<number>

  name: string
  email: string

  // If the column is nullable in the database, make its type nullable.
  // Don't use optional properties. Optionality is always determined
  // automatically by Kysely.
  password: string

  // You can specify a different type for each operation (select, insert and
  // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
  // wrapper. Here we define a column `created_at` that is selected as
  // a `Date`, can optionally be provided as a `string` in inserts and
  // can never be updated:
  created_at: ColumnType<Date, string | undefined, never>
  deleted_at: ColumnType<Date, string | undefined, never>
}

export interface Database {
  users: UsersTable
}

let dialect

// @ts-expect-error remove this line when the dialect is implemented
if (driver === 'sqlite') {
  dialect = new BunWorkerDialect({
    url: 'stacks.sqlite',
  })
}
else {
  dialect = new MysqlDialect({
    pool: createPool({
      database: 'stacks',
      host: '127.0.0.1',
      user: 'root',
      password: '',
      port: 3306,
    }),
  })
}

export const db = new Kysely<Database>({
  dialect,
})

export const dbDialect = dialect
