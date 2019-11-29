"""empty message

Revision ID: b18fcc3dc19e
Revises: 
Create Date: 2019-11-29 03:07:14.807285

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils


# revision identifiers, used by Alembic.
revision = 'b18fcc3dc19e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tasks',
    sa.Column('created', sa.DateTime(), nullable=False),
    sa.Column('updated', sa.DateTime(), nullable=False),
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('actions',
    sa.Column('created', sa.DateTime(), nullable=False),
    sa.Column('updated', sa.DateTime(), nullable=False),
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=True),
    sa.Column('task_id', sa.String(length=36), nullable=True),
    sa.ForeignKeyConstraint(['task_id'], ['tasks.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('actions')
    op.drop_table('tasks')
    # ### end Alembic commands ###
