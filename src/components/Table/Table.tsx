import { TableProps } from "./Table.types";

export const Table = ({
  disabled
}: TableProps) => {
  return (
    <table
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Ruslan</td>
          <td>Developer</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={2}>
            Footer
          </td>
        </tr>
      </tfoot>
    </table>
  );
};